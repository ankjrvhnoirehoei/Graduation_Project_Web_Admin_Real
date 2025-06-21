import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  BooleanField,
  type ShowProps,
} from 'react-admin';
import { 
  Box, 
  Avatar, 
  Typography, 
  Card, 
  CardContent, 
  Chip,
  Divider 
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';

const UserAvatar: React.FC<{ record?: any }> = ({ record = {} }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.nextElementSibling?.setAttribute('style', 'display: flex');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      {record.profilePic ? (
        <>
          <Avatar
            src={record.profilePic}
            sx={{ width: 120, height: 120 }}
            onError={handleImageError}
          />
          <Avatar
            sx={{ 
              width: 120, 
              height: 120, 
              display: 'none',
              bgcolor: 'primary.main',
              fontSize: '3rem'
            }}
          >
            <PersonIcon fontSize="inherit" />
          </Avatar>
        </>
      ) : (
        <Avatar
          sx={{ 
            width: 120, 
            height: 120,
            bgcolor: 'primary.main',
            fontSize: '3rem'
          }}
        >
          <PersonIcon fontSize="inherit" />
        </Avatar>
      )}
    </Box>
  );
};

export const UserShow: React.FC<ShowProps> = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {/* Left Column - Profile Card */}
        <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
          <Card>
            <CardContent>
              <UserAvatar />
              <Typography variant="h5" align="center" gutterBottom>
                <TextField source="username" />
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                <TextField source="handleName" />
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Chip
                  label={<BooleanField source="isVip" />}
                  color="primary"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
        
        {/* Right Column - Details Card */}
        <Box sx={{ flex: '2 1 500px', minWidth: 500 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <TextField source="email" label="Email" />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <TextField source="phoneNumber" label="Phone" />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <TextField source="address" label="Address" />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CakeIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <TextField source="dateOfBirth" label="Date of Birth" />
                </Box>
                
                <Box sx={{ mb: 1 }}>
                  <TextField source="gender" label="Gender" />
                </Box>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom>
                Bio
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <TextField source="bio" />
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom>
                Account Information
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ flex: '1 1 200px' }}>
                  <Typography variant="body2" color="textSecondary">
                    Created At
                  </Typography>
                  <DateField source="createdAt" showTime />
                </Box>
                <Box sx={{ flex: '1 1 200px' }}>
                  <Typography variant="body2" color="textSecondary">
                    Updated At
                  </Typography>
                  <DateField source="updatedAt" showTime />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </SimpleShowLayout>
  </Show>
);