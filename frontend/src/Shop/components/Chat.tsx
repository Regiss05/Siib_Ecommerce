import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  TextField,
  InputAdornment,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Avatar,
} from '@mui/material';
import {
  ArrowBack,
  Image as ImageIcon,
  Home as HomeIcon,
  FavoriteBorder as FavoriteIcon,
  ShoppingCart as CartIcon,
  ChatBubble as ChatIcon,
  AccountCircle as ProfileIcon,
  Send as SendIcon,
  SupportAgent as SupportIcon,
} from '@mui/icons-material';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
interface Message {
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
}

const ChatScreen = () => {
  const [value, setValue] = useState('chat');
  const [messages, setMessages] = useState<Message[]>([


    
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setNewMessage('');

      // Simulate support team response (replace with actual logic)
      setTimeout(() => {
        const supportResponse: Message = {
          text: `Support: Thank you for your message! We'll get back to you shortly.`,
          sender: 'support',
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prevMessages) => [...prevMessages, supportResponse]);
      }, 1000); // Simulate 1-second delay
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    
    <Container maxWidth="md" style={{ padding: 0,
      


     }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{backgroundColor:'white',width:'100%',height:'55%'}}>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ textAlign:'center',color:'black'}}>
            Support Chat
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, 
        height: 'calc(100vh - 112px)',
         backgroundColor: '#f0f0f0', position: 'relative',
          overflowY: 'auto',
          backgroundImage:'url(https://img.freepik.com/premium-vector/social-networks-dating-apps-vector-seamless-pattern_341076-469.jpg?w=740)',
           backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed', 
            minHeight: '100vh', // Ensure the box takes up full viewport height
            
        
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: '100vh',

        backgroundColor: 'rgba(255, 255, 255, 0.90)', // Semi-transparent overlay

      },
          }}>
     

        <List>
          {messages.map((message, index) => (
            <ListItem key={index} style={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',display: "flex", flexDirection: "column", }}>
              <Paper elevation={3} sx={{ padding: '4px 9px', display: "flex",flexDirection: "column",   overflow: "hidden", borderRadius: '8px', backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#fff', boxShadow: "0 2px 4px rgba(0,0,0,0.1)", maxWidth: "70%", width: "fit-content",  }}>
                <ListItemText primary={message.text} secondary={message.timestamp} sx={{ textAlign: message.sender === 'user' ? 'right' : 'left',marginRight:'58px' }} />
              </Paper>
              {message.sender === 'support' && (
                <Avatar sx={{ marginLeft: 9,color:'blue' }}>
                  <SupportIcon />
                </Avatar>
              )}


{message.sender === 'user' && (
                <Avatar sx={{ marginLeft: 49,color:'blue',position:"absolute",bottom:'59px' }}>
                  <SupervisedUserCircleOutlinedIcon  />
                </Avatar>
              )}
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>

      <Box sx={{marginLeft:'23px',padding: "20px", borderTop: "1px solid #e0e0e0",gap: 1,}}>
        <TextField
           fullWidth
           variant="outlined"
          placeholder="Type your message"
          size='small'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          InputProps={{
         
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSendMessage}>
                  <SendIcon />
                </IconButton>
                {/* <IconButton>
                  <ImageIcon />
                </IconButton> */}
              </InputAdornment>
            ),
            style: { borderRadius: '10px', backgroundColor: '#f5f5f5'}
          }}
        />
      </Box>

      <Divider />

      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorite" value="favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Cart" value="cart" icon={<CartIcon />} />
        <BottomNavigationAction label="Chat" value="chat" icon={<ChatIcon />} />
        <BottomNavigationAction label="Profile" value="profile" icon={<ProfileIcon />} />
      </BottomNavigation>
    </Container>
  );
};

export default ChatScreen;

