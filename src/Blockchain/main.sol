pragma solidity ^0.5.1;

//---------------------------------------------------------------------------------------------------
contract MasterNode
{
    mapping (address => User) _user;
    mapping (bytes32 => Sub) _subList;
    Post[100] _recentPosts;
    
    
    function createPost(bytes32 title, bytes32 data, bytes32 timeStamp, bytes32 subName) public {
        
        if(_user[msg.sender] == User(0)){
            _user[msg.sender] = new User("Temp Name: Fix this");   
        }
        Post tempPost = new Post(title, timeStamp, data, _subList[subName]);
        
        //FIXME: ADD POST TO RECENT POSTS
    }
    
    function createSub(bytes32 name) public {
        if(_subList[name] == Sub(0)){
            _subList[name] = new Sub(name);
        }
    }
    
    function getSub(bytes32 name) public view returns(Sub sub){
        return _subList[name];
    }
    
}

//---------------------------------------------------------------------------------------------------
contract User
{
    address[] _comments;
    address[] _posts;
    bytes32 _name;
    
    constructor(bytes32 name) public{
        _name = name;   
    }
    
    function getUsername() public view returns(bytes32 name){
        return _name;
    }
    
    function getPostLength() public view returns(uint length){
        return _posts.length;
    }
    
    function getPost(uint index) public view returns(address post){
        return _posts[index];
    }
    
    function getCommentLength() public view returns(uint length){
        return _comments.length;
    }
    
    function getComment(uint index) public view returns(address comment){
        return _comments[index];
    }
    
}

//---------------------------------------------------------------------------------------------------
contract Post
{
    bytes32 _title;
    bytes32 _data;
    bytes32 _timeStamp;
    address _user;
    Sub _sub;
    Comment _lastComment;
    
    constructor(bytes32 title, bytes32 time, bytes32 data, Sub sub) public{
        _data = data;
        _sub = sub;
        _title = title;
        _timeStamp = time;
        _user = msg.sender;
    }
    
    function createComment(bytes32 data, address user) public {
        Comment tempComment = new Comment(data, user, _lastComment);
        _lastComment = tempComment;
    }
    
    function getLastComment() public view returns(Comment commentAddress){
        return _lastComment;
    }
    
    function getTime() public view returns(bytes32 time){
        return _timeStamp;
    }
}

//---------------------------------------------------------------------------------------------------
contract Sub
{
    bytes32 _name;
    Post[] _postList;
    
    constructor(bytes32 name) public{
        _name = name;
    }
    
    function getPostLength() public view returns(uint length){
        return _postList.length;
    }
    
    function getPost(uint index) public view returns(Post post){
        return _postList[index];
    }
    
    function getName() public view returns(bytes32 name){
        return _name;
    }
}

//---------------------------------------------------------------------------------------------------
contract Comment
{
    bytes32 _data;
    address _user;
    Comment _lastComment;
    
    constructor(bytes32 data, address user, Comment lastComment) public{
        _data = data;
        _user = user;
        _lastComment = lastComment;
    }
    
    function getPreviousComment() public view returns(Comment commentAddress){
        return _lastComment;
    }
    
    function getCommentData() public view returns(bytes32 bodyText){
        return _data;
    }
    
    function getUser() public view returns(address user){
        return _user;
    }
}





