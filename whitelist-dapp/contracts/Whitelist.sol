// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Whitelist {
    address owner; // variável que conterá o endereço do implementador do contrato

    constructor(){
        owner = msg.sender; // definindo o proprietário do implementador do contrato
    }

    modifier onlyOwner() {
        //require(msg.sender == owner);
        require(msg.sender == owner, "O chamador nao eh o proprietario");
        _;
    }

    modifier isWhitelisted(address _address){//Modificador pra verificar se o endereço consta na lista branca
        require(whitelistedAddresses[_address], "Voce precisa estar na lista de permissoes");
        _;
    }

    mapping(address => bool) whitelistedAddresses; //lista de endereços, para armazenar os mesmos, fazer um mapeamento para verificar se o endereço consta na lista

    function addUser(address _addresstoWhitelist) public onlyOwner {// Função para adicionar um novo endereço na lista, mudando seu status pra true
        whitelistedAddresses[_addresstoWhitelist] = true; //true = permitido //false = não permitido  
    }

    function getUsers(address _addr) public view returns (bool){
        return whitelistedAddresses[_addr];
   }

    function exampleFunction() public view isWhitelisted(msg.sender) returns (bool) {
        return true;
    }

    function verifyUser(address _whitelistedAddress) public view returns(bool){//Função que verifica se o endereço consta na lista branca
        bool userIsWhitelisted = whitelistedAddresses[_whitelistedAddress];
        return userIsWhitelisted;
    }


}