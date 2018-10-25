pragma solidity^0.4.2;

contract Election{
    // Model a candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public voters;
    // Store candidates
    // Fetch accounts
    mapping(uint=>Candidate) public candidates;
    // Store candidates account
    uint public candidatesCount;

    constructor() public{
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");

    }

    function addCandidate(string _name) private{
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name , 0);
    }

    function vote(uint _candidateID) public {
        voters[msg.sender] = true;
        candidates[_candidateID].voteCount++;

    }



}

