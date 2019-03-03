pragma solidity ^0.4.18;

//---------------------------------------------------------------------------------------------------
contract MasterNode
{
    mapping (address => User) _user;
    mapping (string => Sub) _subList;
    Post _lastGPost;    //Last Post (Global)
    
    
    function createPost(string memory title, string memory timeStamp, string memory data, string memory subName) public {
        
        if(_user[msg.sender] == User(0)){
            _user[msg.sender] = new User("Temp Name: Fix this");
        }
        
        _user[msg.sender].createPost(title, timeStamp, data, _subList[subName].getName(), _lastGPost);
        _lastGPost = _user[msg.sender].getLastPost();
    }
    
    function createSub(string memory name) public {
        if(_subList[name] == Sub(0)){
            _subList[name] = new Sub(name);
        }
    }
    
    function getSub(string memory name) public view returns(Sub sub){
        return _subList[name];
    }
    
    function getLastGPost() public view returns(Post lastGPost){
        return _lastGPost;
    }
    
    function getUser(address wallet) public view returns(User user){
        return _user[wallet];
    }
}

//---------------------------------------------------------------------------------------------------
contract User
{
    Comment[] _comments;
    Post[] _posts;
    string _name;
    
    constructor(string memory name) public{
        _name = name;   
    }
    
    function getUsername() public view returns(string memory name){
        return _name;
    }
    
    function getPostLength() public view returns(uint length){
        return _posts.length;
    }
    
    function getPost(uint index) public view returns(Post post){
        return _posts[index];
    }
    
    function getCommentLength() public view returns(uint length){
        return _comments.length;
    }
    
    function getComment(uint index) public view returns(Comment comment){
        return _comments[index];
    }
    
    function createPost(string memory title, string memory timeStamp, string memory data, string memory subName, Post lastGPost) public {
        Post tempPost = new Post(title, timeStamp, data, subName, lastGPost);
        _posts[_posts.length] = tempPost;
    }
    
    function getLastPost() public view returns(Post lastPost){
        return _posts[_posts.length - 1];
    }
    
}

//---------------------------------------------------------------------------------------------------
contract Post
{
    string _title;
    string _data;
    string _timeStamp;
    address _user;
    string _sub;
    Comment _lastComment;
    Post _lastGPost;
    
    constructor(string memory title, string memory time, string memory data, string memory subName, Post lastGPost) public{
        _data = data;
        _sub = subName;
        _title = title;
        _timeStamp = time;
        _user = msg.sender;
        _lastGPost = lastGPost;
    }
    
    function createComment(string memory data, address user) public {
        Comment tempComment = new Comment(data, user, _lastComment);
        _lastComment = tempComment;
    }
    
    function getLastComment() public view returns(Comment commentAddress){
        return _lastComment;
    }
    
    function getTime() public view returns(string memory time){
        return _timeStamp;
    }
    
    function getPreviousGPost() public view returns(Post lastGPost){
        return _lastGPost;
    }
}

//---------------------------------------------------------------------------------------------------
contract Sub
{
    string _name;
    Post[] _postList;
    
    constructor(string memory name) public{
        _name = name;
    }
    
    function getPostLength() public view returns(uint length){
        return _postList.length;
    }
    
    function getPost(uint index) public view returns(Post post){
        return _postList[index];
    }
    
    function getName() public view returns(string memory name){
        return _name;
    }
}

//---------------------------------------------------------------------------------------------------
contract Comment
{
    string _data;
    address _user;
    Comment _lastComment;
    
    constructor(string memory data, address user, Comment lastComment) public{
        _data = data;
        _user = user;
        _lastComment = lastComment;
    }
    
    function getPreviousComment() public view returns(Comment commentAddress){
        return _lastComment;
    }
    
    function getCommentData() public view returns(string memory bodyText){
        return _data;
    }
    
    function getUser() public view returns(address user){
        return _user;
    }
}





