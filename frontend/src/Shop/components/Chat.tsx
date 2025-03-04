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
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
        backgroundColor: 'rgba(255, 255, 255, 0.95)', // Semi-transparent overlay

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

      <Box>
        <TextField
          variant="outlined"
          fullWidth
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


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Avatar,
//   Box,
//   Divider
// } from '@mui/material';
// import Send from '@mui/icons-material/Send';
// import { borderRadius } from '@mui/system';

// const ChatPage = () => {
//   const [newMessage, setNewMessage] = useState('');
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: 'Hello! How can I help you today?',
//       sender: 'support',
//       timestamp: new Date(Date.now() - 3600000),
//     },
//     {
//       id: 2,
//       text: 'I need help with my order',
//       sender: 'user',
//       timestamp: new Date(Date.now() - 1800000),
//     },
//     {
//       id: 3,
//       text: 'Sure, could you share your order ID?',
//       sender: 'support',
//       timestamp: new Date(Date.now() - 900000),
//     },
//   ]);

//   const messagesEndRef =useRef<HTMLDivElement>(null!);
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (newMessage.trim()) {
//       const newMsg = {
//         id: messages.length + 1,
//         text: newMessage,
//         sender: 'user',
//         timestamp: new Date(),
//       };
//       setMessages([...messages, newMsg]);
//       setNewMessage('');
//     }
//   };

//   return (
//     <Box sx={{  
//       height: '100vh', 
//       display: 'flex', 
//       flexDirection: 'column',
//       backgroundImage:'url(https://img.freepik.com/premium-vector/social-networks-dating-apps-vector-seamless-pattern_341076-469.jpg?w=740)',
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       position: 'relative',
//       '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(255, 255, 255, 0.92)', // Semi-transparent overlay

//       },
      
//       }}>
//       <AppBar position="static" color="default" elevation={1}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Support Chat
//           </Typography>
//           <Avatar sx={{ bgcolor: 'primary.main' }}>SB</Avatar>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="md" sx={{ flexGrow: 1, overflow: 'auto', py: 2 }}>
//         <List sx={{ width: '100%' }}>
//           {messages.map((message) => (
//             <ListItem
//               key={message.id}
//               sx={{
//                 justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                 alignItems: 'flex-start',
//                 my: 1
//               }}
//             >
//               {message.sender !== 'user' && (
//                 <ListItemAvatar>
//                   <Avatar sx={{ bgcolor: 'secondary.main' }}>Sb</Avatar>
//                 </ListItemAvatar>
//               )}
//               <Box
//                 sx={{
//                   maxWidth: '70%',
//                   p: 1.5,
//                   borderRadius: 4,
//                   bgcolor: message.sender === 'user' ? 'primary.main' : 'background.paper',
//                   color: message.sender === 'user' ? 'common.white' : 'text.primary',
//                   boxShadow: 1,
//                 }}
//               >
//                 <ListItemText
//                   primary={message.text}
//                   secondary={
//                     <Typography
//                       variant="caption"
//                       sx={{ color: message.sender === 'user' ? 'grey.300' : 'text.secondary' }}
//                     >
//                       {new Date(message.timestamp).toLocaleTimeString()}
//                     </Typography>
//                   }
//                 />
//               </Box>
//             </ListItem>
//           ))}
//           <div ref={messagesEndRef} />
//         </List>
//       </Container>

//       <Box component="form" onSubmit={handleSend} sx={{ p: 1, borderTop: 3, borderColor: 'divider'}}>
//         <Container maxWidth="md">
//           <Box sx={{ display: 'flex', gap: 4, alignItems: 'center',borderRadius:'6px',paddingBottom:'21%'  }}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Type your message..."
//               value={newMessage}
              
//               onChange={(e) => setNewMessage(e.target.value)}
//               multiline
//               maxRows={3}
//             />
//             <Button
//               type="submit"
//               color="primary"
             
//               disabled={!newMessage.trim()}
//               variant="contained"
//             >
//               <Send/>
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default ChatPage;





// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Container,
//   TextField,
//   InputAdornment,
//   BottomNavigation,
//   BottomNavigationAction,
//   Box,
//   Divider,
// } from '@mui/material';
// import {
//   ArrowBack,
//   Image as ImageIcon,
//   Home as HomeIcon,
//   FavoriteBorder as FavoriteIcon,
//   ShoppingCart as CartIcon,
//   ChatBubble as ChatIcon,
//   AccountCircle as ProfileIcon,
// } from '@mui/icons-material';

// const ChatScreen = () => {
//   const [value, setValue] = React.useState('chat');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Container maxWidth="sm" style={{ padding: 0 }}>
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="back">
//             <ArrowBack />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Group chat
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box sx={{ flexGrow: 1, height: 'calc(100vh - 112px)', backgroundColor: '#f0f0f0', position: 'relative' }}>
//         {/* Chat Messages Area (Replace with actual messages) */}
//         <Box sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           textAlign: 'center',
//           color: '#ccc',
//         }}>
//           <Typography variant="body2">
//             Today 09:41 AM
//           </Typography>
//           <div style={{
//             backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill=\'none\' stroke=\'%23ddd\' stroke-width=\'1\'%3E%3Cpath d=\'M0 0h100v100H0z\'/%3E%3Cpath d=\'M10 10l80 80M10 90l80-80\'/%3E%3Cpath d=\'M50 10v80M10 50h80\'/%3E%3Ccircle cx=\'25\' cy=\'25\' r=\'10\'/%3E%3Ccircle cx=\'75\' cy=\'75\' r=\'10\'/%3E%3Ccircle cx=\'75\' cy=\'25\' r=\'10\'/%3E%3Ccircle cx=\'25\' cy=\'75\' r=\'10\'/%3E%3C/g%3E%3C/svg%3E")',
//             backgroundSize: '100px 100px',
//             width: '100%',
//             height: '100%',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             opacity: 0.5,
//           }} />
//         </Box>
//       </Box>

//       <Box sx={{ padding: 1, backgroundColor: '#fff' }}>
//         <TextField
//           variant="outlined"
//           fullWidth
//           placeholder="Type your message"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton>
//                   <ImageIcon />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       <Divider />

//       <BottomNavigation
//         value={value}
//         onChange={handleChange}
//         showLabels
//       >
//         <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
//         <BottomNavigationAction label="Favorite" value="favorite" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Cart" value="cart" icon={<CartIcon />} />
//         <BottomNavigationAction label="Chat" value="chat" icon={<ChatIcon />} />
//         <BottomNavigationAction label="Profile" value="profile" icon={<ProfileIcon />} />
//       </BottomNavigation>
//     </Container>
//   );
// };

// export default ChatScreen;
