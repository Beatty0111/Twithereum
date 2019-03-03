pragma solidity ^0.4.25;

//---------------------------------------------------------------------------------------------------
contract MasterNode
{
    mapping (address => User) _user;
    mapping (bytes32 => Sub) _subList;
    Post _lastGPost;    //Last Post (Global)
    
    
    function createPost(bytes32  title, bytes32  timeStamp, bytes32  data, bytes32  subName) public {
        
        if(_user[msg.sender] == User(0)){
            _user[msg.sender] = new User("Temp Name: Fix this");
        }
        
        _user[msg.sender].createPost(title, timeStamp, data, _subList[subName].getName(), _lastGPost);
        _lastGPost = _user[msg.sender].getLastPost();
    }
    
    function createSub(bytes32  name) public {
        if(_subList[name] == Sub(0)){
            _subList[name] = new Sub(name);
        }
    }
    
    function getSub(bytes32  name) public constant returns(Sub sub){
        return _subList[name];
    }
    
    function getLastGPost() public constant returns(Post lastGPost){
        return _lastGPost;
    }
    
    function getUser(address wallet) public constant returns(User user){
        return _user[wallet];
    }
}

//---------------------------------------------------------------------------------------------------
contract User
{
    Comment[] _comments;
    Post[] _posts;
    bytes32 _name;
    
    constructor (bytes32  name) public{
        _name = name;   
    }
    
    function getUsername() public constant returns(bytes32  name){
        return _name;
    }
    
    function getPostLength() public constant returns(uint length){
        return _posts.length;
    }
    
    function getPost(uint index) public constant returns(Post post){
        return _posts[index];
    }
    
    function getCommentLength() public constant returns(uint length){
        return _comments.length;
    }
    
    function getComment(uint index) public constant returns(Comment comment){
        return _comments[index];
    }
    
    function createPost(bytes32  title, bytes32  timeStamp, bytes32  data, bytes32  subName, Post lastGPost) public {
        Post tempPost = new Post(title, timeStamp, data, subName, lastGPost);
        _posts[_posts.length] = tempPost;
    }
    
    function getLastPost() public constant returns(Post lastPost){
        return _posts[_posts.length - 1];
    }
    
}

//---------------------------------------------------------------------------------------------------
contract Post
{
    bytes32 _title;
    bytes32 _data;
    bytes32 _timeStamp;
    address _user;
    bytes32 _sub;
    Comment _lastComment;
    Post _lastGPost;
    
    constructor(bytes32  title, bytes32  time, bytes32  data, bytes32  subName, Post lastGPost) public{
        _data = data;
        _sub = subName;
        _title = title;
        _timeStamp = time;
        _user = msg.sender;
        _lastGPost = lastGPost;
    }
    
    function createComment(bytes32  data, address user) public {
        Comment tempComment = new Comment(data, user, _lastComment);
        _lastComment = tempComment;
    }
    
    function getLastComment() public constant returns(Comment commentAddress){
        return _lastComment;
    }
    
    function getTime() public constant returns(bytes32  time){
        return _timeStamp;
    }
    
    function getPreviousGPost() public constant returns(Post lastGPost){
        return _lastGPost;
    }
}

//---------------------------------------------------------------------------------------------------
contract Sub
{
    bytes32 _name;
    Post[] _postList;
    
    constructor(bytes32  name) public{
        _name = name;
    }
    
    function getPostLength() public constant returns(uint length){
        return _postList.length;
    }
    
    function getPost(uint index) public constant returns(Post post){
        return _postList[index];
    }
    
    function getName() public constant returns(bytes32  name){
        return _name;
    }
}

//---------------------------------------------------------------------------------------------------
contract Comment
{
    bytes32 _data;
    address _user;
    Comment _lastComment;
    
    constructor(bytes32  data, address user, Comment lastComment) public{
        _data = data;
        _user = user;
        _lastComment = lastComment;
    }
    
    function getPreviousComment() public constant returns(Comment commentAddress){
        return _lastComment;
    }
    
    function getCommentData() public constant returns(bytes32  bodyText){
        return _data;
    }
    
    function getUser() public constant returns(address user){
        return _user;
    }
}





