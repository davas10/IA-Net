// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

//importamos la extensión openzeppelin
//Estandar que se utiliza en los contratos inteligentes para los tokens no fungibles ERC721
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//TinderERC721 - nombre del contrato
//ERC721URIStorage - tipo de almacenamiento 
//este contrato se va a construir sobre ERC721URIStorage
contract TinderERC721 is ERC721URIStorage {
    //variable
    uint256 TINDER_TOKEN_ID;

    //constructor
    constructor() ERC721("CleverNFT", "CN") {}
  
    //Función
    function mintNFT(address _userOne, address _userTwo, string memory tokenURI) public {
        _mint(_userOne, TINDER_TOKEN_ID);
        _setTokenURI(TINDER_TOKEN_ID, tokenURI);
         TINDER_TOKEN_ID++;

        _mint(_userTwo,TINDER_TOKEN_ID);
        _setTokenURI(TINDER_TOKEN_ID, tokenURI);
        TINDER_TOKEN_ID++;
    }
}