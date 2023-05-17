// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Errand {
    address escrowContractAddreas;
    address public inspector;
    bool errandCompleted;
    bool bidComplelted;
    uint256[] public errandAmount;

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
        string description;
        string location;
        string isOnSite;
        string category;
        uint256 errandDate;
        uint256 errandCost;
        ErrandStatus status;
        address owner;
        uint256[] bidAmounts;
        address[] bidders;
        Bid[] bids;
    }

    struct Bid {
        uint256 id;
        address payable bidder;
        uint256 amount;
        bool accepted;
    }

    ErrandStruct[] public errands;
    Bid[] public bids;
    uint256 errandTotal;
    uint256 bidTotal;
    mapping(address => mapping(uint256 => Bid[])) public errandBids;
    mapping(address => bool) bidderAccepted;

    mapping(uint256 => address) public errandToOwner;
    mapping(address => uint256) public ownerErrandCount;
    mapping(address => ErrandStruct) public ownerErrand;
    mapping(uint256 => ErrandStruct) public servicesById;
    mapping(address => Bid) userBids;

    function createErrand(
        string memory _image,
        string memory _title,
        string memory _description,
        string memory _location,
        string memory _isOnsite,
        string memory _category,
        uint256 _errandCost
    ) external {
        ErrandStruct storage newErrand = ownerErrand[msg.sender];
        newErrand.image = _image;
        newErrand.title = _title;
        newErrand.description = _description;
        newErrand.location = _location;
        newErrand.isOnSite = _isOnsite;
        newErrand.category = _category;
        newErrand.errandDate = block.timestamp;
        newErrand.errandCost = _errandCost;
        newErrand.owner = msg.sender;
        newErrand.status = ErrandStatus.Created;
        errandAmount.push(_errandCost);
        errands.push(newErrand);
        errandToOwner[errands.length - 1] = msg.sender;
        ownerErrandCount[msg.sender]++;
    }

    function getAllErrand() external view returns (ErrandStruct[] memory) {
        return errands;
    }

    function getAllBids() external view returns (Bid[] memory) {
        return bids;
    }

    function sendRequest(uint256 _errandId, uint256 _bidAmount) external {
        require(_errandId < errands.length, "Errand ID does not exist");
        require(_bidAmount > 0, "Bid amount must be greater than zero");
        ErrandStruct storage errand = servicesById[_errandId];
        require(
            errand.status == ErrandStatus.Created,
            "Cannot bid for this errand"
        );
        errand.bidders.push(msg.sender);
        errand.bidAmounts.push(_bidAmount);
        Bid storage request = userBids[msg.sender];
        request.amount = _bidAmount;
        request.accepted = false;
        request.bidder = payable(msg.sender);
        request.id = bidTotal;
        bidTotal++;
        errand.bids.push(request);
        bids.push(request);
    }

    function acceptRequest(uint256 _bidId) external payable {
        require(_bidId < bids.length, "Errand ID does not exist");
        require(ownerErrand[msg.sender].owner == msg.sender, "");
        Bid storage accept = bids[_bidId];
        require(bids[_bidId].accepted != true, "");
        (bool success, ) = payable(address(this)).call{value: accept.amount}(
            ""
        );
        require(success, "Payment transfer failed");
        accept.accepted = true;
        bidderAccepted[accept.bidder] = true;
    }

    function completeTask(uint256 _errandId) external {
        require(_errandId < errands.length, "Errand ID does not exist");
        ErrandStruct storage errand = errands[_errandId];
        require(
            bidderAccepted[msg.sender],
            "Only the accepted bidder can complete the task"
        );
        require(
            errand.status == ErrandStatus.Accepted,
            "Errand not in accepted status"
        );
        errand.status = ErrandStatus.Success;
    }

    function acceptTask(uint256 _errandId) external {
        require(_errandId < errands.length, "Errand ID does not exist");
        ErrandStruct storage errand = errands[_errandId];
        require(
            errand.owner == msg.sender,
            "Only the errand owner can accept the task"
        );
        require(
            errand.status == ErrandStatus.Created,
            "Errand not in created status"
        );

        errand.status = ErrandStatus.Accepted;
        address acceptedBidder = address(0);
        uint256 acceptedBidAmount = 0;

        for (uint256 i = 0; i < errand.bids.length; i++) {
            if (errand.bids[i].accepted) {
                acceptedBidder = errand.bids[i].bidder;
                acceptedBidAmount = errand.bids[i].amount;
                break;
            }
        }

        require(acceptedBidder != address(0), "No accepted bidder found");

        // Transfer the required fee from the contract to the bidder whose bid was accepted
        payable(acceptedBidder).transfer(acceptedBidAmount);
    }
}
