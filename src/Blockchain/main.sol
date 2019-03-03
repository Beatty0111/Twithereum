pragma solidity ^0.4.0;

//---------------------------------------------------------------------------------------------
contract MasterNode{
    mapping (address => User) _userMap;
    //User[] _userList;
    
    function createUser(string name) public{
        _userMap[msg.sender] = new User(name);
       // _userList[_userList.length] = _userMap[msg.sender];
    }
    
    function getUser(address addr) public constant returns(User user){
        return _userMap[addr];
    }
    
    /*function getUserByIndex(uint index) public constant returns(User user) {
        return _userList[index];
    }*/
    
}

//---------------------------------------------------------------------------------------------
contract User{
    string _name;
    Post _lastPost;
    User[] _followings;
    mapping (address => bool) _followingMap;
    
    function User(string name) public { 
        _name = name;
    }
    
    function follow(User user) public {
        if(_followingMap[user] == false) {
            _followings[_followings.length] = user;
        }
    }
    
    function unfollow(User user) public {
        if(_followingMap[user]) {
            for(uint i = 0; i < _followings.length; i++) {
                if (_followings[i] == user) {
                    _followings[i] = User(0);
                    break;
                }
            }
        }
    }
    
    function getFollowing(uint index) public constant returns (User user) {
        return _followings[index];
    }
    
    function getName() public constant returns(string name){
        return _name;
    }
    
    function createPost(string data) public {
        Post tempPost = _lastPost;
        _lastPost = new Post(data);
        _lastPost.setPreviousPost(tempPost);
    }
    
    function getLastPost() public constant returns(Post lastPost){
        return _lastPost;
    }
}

//---------------------------------------------------------------------------------------------
contract Post{
    string _data;
    mapping (address => bool) _liked;
    uint likes;
    Post _previousPost;
    
    function Post(string data) public {
        _data = data;
        likes = 0;
    }
    
    function setPreviousPost(Post newPost) public {
        _previousPost = newPost;
    }
    
    function getPreviousPost() public constant returns(Post post){
        return _previousPost;
    }
    
    function getLike() public constant returns(uint like){
        return likes;
    }
    
    function removeLike() public {
        if(_liked[msg.sender]){
            _liked[msg.sender] = false;
            likes--;
        }
    }
    
    function Like() public {
        if(!_liked[msg.sender])
        _liked[msg.sender] = true;
        likes++;
    }
    
    function getData() public constant returns(string data){
        return _data;
    }
    
}