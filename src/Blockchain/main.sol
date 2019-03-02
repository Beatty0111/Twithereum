//---------------------------------------------------------------------------------------------------
contract MasterNode
{
    mapping (address => User) _user;
    address[100] _recentPosts;
    address[] subList;
    
    
    function createPost(string userName, string data, string timeStamp){
        
        if(_user[msg.sender] == User[0]){
            address tempUser = new User("Temp Name: Fix this");   
        }
    }
}

//---------------------------------------------------------------------------------------------------
contract User
{
    address _lastPost;
    
    
    constructor(string name){
        
    }
    
}

//---------------------------------------------------------------------------------------------------
contract Post
{
    string _data;
    address _user;
    address _sub;
    address _lastComment;
    
    constructor(string data, address user, address sub){
        _data = data;
        _user = user;
        _sub = sub;
    }
    
    function addComment
}

//---------------------------------------------------------------------------------------------------
contract Sub
{
    address[] _postList;
    
    constructor(){
        
    }
}

//---------------------------------------------------------------------------------------------------
contract Comment
{
    string _data;
    address _user;
    
    constructor(string data, address user){
        _data = data;
        _user = user;
    }
}