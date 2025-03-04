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

interface Message {
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
}

const ChatScreen = () => {
  const [value, setValue] = useState('chat');
  const [messages, setMessages] = useState<Message[]>([]);
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
          timestamp: new Date().toLocaleTimeString(),
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
    <Container maxWidth="sm" style={{ padding: 0 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{backgroundColor:'white',width:'100%',height:'55%'}}>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ textAlign:'center'}}>
            Support Chat
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, 
        height: 'calc(100vh - 112px)',
         backgroundColor: '#f0f0f0', position: 'relative',
          overflowY: 'auto',
          backgroundImage:'url(https://img.freepik.com/premium-vector/social-networks-dating-apps-vector-seamless-pattern_341076-469.jpg?w=740)',
         backgroundPosition: 'center',
      
           backgroundSize: 'cover',
    
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.90)', // Semi-transparent overlay

      },
          }}>
        <Box sx={{
          textAlign: 'center',
          color: '#ccc',
          padding: 2,
        }}>
        
        </Box>

        <List>
          {messages.map((message, index) => (
            <ListItem key={index} style={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <Paper elevation={1} style={{ padding: '8px 12px', borderRadius: '20px', backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#fff' }}>
                <ListItemText primary={message.text} secondary={message.timestamp} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }} />
              </Paper>
              {message.sender === 'support' && (
                <Avatar sx={{ marginLeft: 1 }}>
                  <SupportIcon />
                </Avatar>
              )}
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>

      <Box sx={{paddingBottom:'40px',width:'100%',textAlign:'center',borderRadius:'10px',borderBottomRightRadius:'7px',backgroundColor:'rgba(255, 255, 255, 0.94)'}}>
        <TextField
         
        
          placeholder="Type your message"
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
                <IconButton>
                  <ImageIcon />
                </IconButton>
              </InputAdornment>
            ),
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

