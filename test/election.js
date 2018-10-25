var Election = artifacts.require("./Election");

contract("Election",function (accounts) {
    let electionInstance;
    it("initializes with 2 candidates", () => {
        return Election.deployed().then(function (instance) {
            return instance.candidatesCount();
        }).then(function (count) {
            assert.equal(count, 2);
        });
    });
    it('checking the first candidate', function () {
        return Election.deployed().then(function (instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function (candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "have the correct name");
            assert.equal(candidate[2], 0, "correct vote count");
            return electionInstance.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate[0], 2, "contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "have the correct name");
            assert.equal(candidate[2], 0, "correct vote count");


        });
    });





});



