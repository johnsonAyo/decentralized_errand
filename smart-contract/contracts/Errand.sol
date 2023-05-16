//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";

contract Errand {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address escrowContractAddreas;
    address public inspector;
    bool errandCompleted;
    bool bidComplelted;

   FeeReceiver private feeReceiver;

    constructor() {
        feeReceiver = FeeReceiver(address(this));
    }

    enum ErrandStatus {
        Created,
        Pending,
        Accepted,
        Cancelled,
        InProgress,
        Success
    }

    struct ErrandStruct {
        string image;
        string title;
        string location;
        bool isOnSite;
        uint256 errandDate;
        uint256 errandCost;
        ErrandStatus status;
        address owner;
    }

    struct Bid {
        uint256 id;
        address bidder;
        uint256 amount;
        bool accepted;
    }

    ErrandStruct[] public errands;
    Bid[] public bids;

    mapping(uint256 => address) public errandToOwner;
    mapping(address => uint256) public ownerErrandCount;
    mapping(address => ErrandStruct) public ownerErrand;

    /**
     * @dev Create a new errand and also send the cost to the smart contract
     * @param _errandDetails The details of the errand.
     * @param _errandTitle The title of the errand.
     * @param _errandCost The cost of the errand.
     * @param _deliveryAddress The delivery address of the errand.
     * @param _category The category of the errand.
     * @param _pickupAddress The pickup address of the errand.
     * @param _errandImage The image of the errand.
     * @param _errandDeadline The deadline for the errand.
     */
    function createErrand(
         string memory _image,
        string memory _title,
        string memory _location,
        uint256 _errandDate;
        uint256 _errandCost;
    ) public payable {
        require(_errandCost == msg.value, "wrong");
        feeReceiver.deposit{value: msg.value}();
        ErrandStruct storage newErrand = ownerErrand[msg.sender];
      
        errands.push(newErrand);
        uint256 newErrandId = errands.length - 1;
        errandToOwner[newErrandId] = msg.sender;
        ownerErrandCount[msg.sender]++;
        _tokenIds.increment();
    }

    function getAllErrand() external view returns (ErrandStruct[] memory) {
        return errands;
    }

    /**
     * @dev Bid for an errand.
     * @param errandId The ID of the errand to bid for.
     * @param amount The amount of the bid.
     */
    function bidForErrand(uint256 errandId, uint256 amount) public {
        ErrandStruct storage errand = errands[errandId];
        require(
            errand.status == ErrandStatus.Created ||
                errand.status == ErrandStatus.Pending,
            "Errand is not available for bidding"
        );
        Bid memory newBid = Bid(bids.length, msg.sender, amount, false);
        bids.push(newBid);
    }

    /**
     * @dev Accept a bid for an errand.
     * @param errandId The ID of the errand to accept the bid for.
     * @param bidId The ID
     **/
    function acceptBid(uint256 errandId, uint256 bidId) public {
        ErrandStruct storage errand = errands[errandId];
        require(
            errand.errrandOwner == msg.sender,
            "Only the owner of the errand can accept a bid"
        );
        Bid storage bid = bids[bidId];
        require(!bid.accepted, "Bid has already been accepted");
        bid.accepted = true;
        errand.status = ErrandStatus.Accepted;
        errandToOwner[errandId] = bid.bidder;
        ownerErrandCount[msg.sender]--;
        ownerErrandCount[bid.bidder]++;
    }

    /**
     * @dev Deny a bid for an errand.
     * @param bidId The ID of the bid to deny.
     */
    function denyBid(uint256 bidId) public {
        Bid storage bid = bids[bidId];
        require(
            errands[0].errrandOwner == msg.sender,
            "Only the owner of the errand can deny a bid"
        );
        require(!bid.accepted, "Bid has already been accepted");
        delete bids[bidId];
    }

    function allErrand() external view returns (ErrandStruct[] memory) {
        return errands;
    }
}

contract FeeReceiver {
    address private owner;
    mapping(address => uint256) private fees;

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        uint256 fee = msg.value;
        fees[msg.sender] += fee;
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        uint256 amount = fees[msg.sender];
        require(amount > 0, "No fees to withdraw");
        fees[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
