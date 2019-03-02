//---------------------------------------------------------------------------------------------------
contract MasterNode
{
    mapping (address => User) _user;
    mapping (string => address) _subList;
    address[100] _recentPosts;
    
    
    function createPost(string title, string data, string timeStamp, string subName) public {
        
        if(_user[msg.sender] == User[0]){
            _user[msg.sender] = new User("Temp Name: Fix this");   
        }
        _user[msg.sender].createPost(title, data, timeStamp, _subList(subName));
    }
    
    function createSub(string name) public {
        if(_subList[name] == 0){                                 //Might be wrong
            _subList[name] = new Sub(name);
        }
    }
    
}

//---------------------------------------------------------------------------------------------------
contract User
{
    address[] _comments;
    address[] _posts;
    string _name;
    
    constructor(string name){
        _name = name;   
    }
    
    function createPost(string title, string data, string timeStamp, string subName) public {
        tempPost = new Post(title, data, timeStamp, subName);
        _posts[_posts.length] = tempPost;
    }
    
    function getUsername() public constant returns(string name){
        return _name;
    }
    
    function getPostLength() public constant returns(int length){
        return _posts.length;
    }
    
    function getPost(int index) public constant returns(address post){
        return _posts[index];
    }
    
    function getCommentLength() public constant returns(int length){
        return _comments.length;
    }
    
    function getComment(int index) public constant returns(address comment){
        return _comments[index];
    }
    
}

//---------------------------------------------------------------------------------------------------
contract Post
{
    string title;
    string _data;
    address _user;
    address _sub;
    address _lastComment;
    
    constructor(string title, string data, address user, address sub){
        _data = data;
        _user = user;
        _sub = sub;
    }
    
    function createComment(string data, address user) public {
        tempComment = new Comment(data, user, _lastComment);
        _lastComment = tempComment;
    }
    
    function getLastComment() public constant returns(address commentAddress){
        return _lastComment;
    }
}

//---------------------------------------------------------------------------------------------------
contract Sub
{
    string _name;
    address[] _postList;
    
    constructor(string name){
        _name = name;
    }
    
    function getPostLength() public constant returns(int length){
        return _postList.length;
    }
    
    function getPost(int index) public constant returns(address post){
        return _postList[index];
    }
}

//---------------------------------------------------------------------------------------------------
contract Comment
{
    string _data;
    address _user;
    address _lastComment;
    
    constructor(string data, address user, address lastComment){
        _data = data;
        _user = user;
        _lastComment = lastComment;
    }
    
    function getPreviousComment() public constant returns(address commentAddress){
        return _lastComment;
    }
    
    function getCommentData() public constant returns(string bodyText){
        return _data;
    }
    
    function getUser() public constant returns(address user){
        return _user;
    }
}





