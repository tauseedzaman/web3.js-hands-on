// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Storage {
    uint256 internal  number;

    function setter(uint256 _number) public {
        number = _number;
    }

    function getter() public view returns(uint256){
        return number;
    }
}