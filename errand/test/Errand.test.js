const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Errand", function () {
  let Errand;
  let errand;
  let owner;
  let bidder;

  beforeEach(async function () {
    Errand = await ethers.getContractFactory("Errand");
    [owner, bidder] = await ethers.getSigners();

    errand = await Errand.deploy();
    await errand.deployed();
  });

  it("should create an errand", async function () {
    const image = "image-hash";
    const title = "Errand Title";
    const desc = "Errand decription";
    const location = "Errand Location";
    const isOnSite = "true";
    const category = "cleaning"
    const cost = 1000000000000000000;

    const createErrandTx = await errand.createErrand(image, title, desc, location, isOnSite, category, {
      value: cost,
    });
    await createErrandTx.wait();

    const errands = await errand.getAllErrand();
    expect(errands.length).to.equal(1);

    const createdErrand = errands[0];
    expect(createdErrand.image).to.equal(image);
    expect(createdErrand.title).to.equal(title);
    expect(createdErrand.location).to.equal(location);
    expect(createdErrand.errandCost).to.equal(cost);
    expect(createdErrand.owner).to.equal(owner.address);
    expect(createdErrand.status).to.equal(0); // ErrandStatus.Created
  });

  it("should send a request and accept it", async function () {
    const image = "image-hash";
    const title = "Errand Title";
    const desc = "Errand decription";
    const location = "Errand Location";
    const isOnSite = "true";
    const category = "cleaning"
    const cost = ethers.utils.parseEther("1");

    await errand.createErrand(image, title, desc, location, isOnSite, category, { value: cost });

    const bidAmount = ethers.utils.parseEther("0.5");

    const sendRequestTx = await errand
      .connect(bidder)
      .sendRequest(0, bidAmount);
    await sendRequestTx.wait();

    const errands = await errand.getAllErrand();
    const createdErrand = errands[0];
    const bids = createdErrand.bids;
    expect(bids.length).to.equal(1);

    const bid = bids[0];
    expect(bid.bidder).to.equal(bidder.address);
    expect(bid.amount).to.equal(bidAmount);
    expect(bid.accepted).to.be.false;

    const acceptRequestTx = await errand.acceptRequest(0, 0);
    await acceptRequestTx.wait();

    const acceptedBid = createdErrand.bids[0];
    expect(acceptedBid.accepted).to.be.true;
  });

  it("should complete a task", async function () {
    const image = "image-hash";
    const title = "Errand Title";
    const desc = "Errand decription";
    const location = "Errand Location";
    const isOnSite = "true";
    const category = "cleaning"
    const cost = ethers.utils.parseEther("1");

    await errand.createErrand(image, title, desc, location, isOnSite, category, { value: cost });
    await errand.connect(bidder).sendRequest(0, ethers.utils.parseEther("0.5"));
    await errand.acceptRequest(0, 0);

    const completeTaskTx = await errand.completeTask(0);
    await completeTaskTx.wait();

    const errands = await errand.getAllErrand();
    const completedErrand = errands[0];
    expect(completedErrand.status).to.equal(5); // ErrandStatus.Success
  });

  it("should accept a task and transfer fees to the bidder", async function () {
    const image = "image-hash";
    const title = "Errand Title";
    const desc = "Errand decription";
    const location = "Errand Location";
    const isOnSite = "true";
    const category = "cleaning"
    const cost = ethers.utils.parseEther("1");
    await errand.createErrand(image, title, desc, location, isOnSite, category, { value: cost });
    await errand.connect(bidder).sendRequest(0, ethers.utils.parseEther("0.5"));

    const acceptRequestTx = await errand.acceptRequest(0, 0);
    await acceptRequestTx.wait();

    const acceptTaskTx = await errand.acceptTask(0);
    await acceptTaskTx.wait();

    const ownerBalance = await ethers.provider.getBalance(owner.address);
    expect(ownerBalance).to.equal(cost);

    const bidderBalance = await ethers.provider.getBalance(bidder.address);
    const expectedBidderBalance = ethers.utils.parseEther("0.5").add(cost);
    expect(bidderBalance).to.equal(expectedBidderBalance);
  });
});
