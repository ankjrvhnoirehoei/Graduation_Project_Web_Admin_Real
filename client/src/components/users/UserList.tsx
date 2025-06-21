import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  BooleanField,
  DateField,
  type ListProps,
} from 'react-admin';
import { Box, Avatar, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const truncateId = (id: string) => id.length > 8 ? `${id.slice(0, 6)}…` : id;

const AvatarField: React.FC<{ record?: any }> = ({ record = {} }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.nextElementSibling?.setAttribute('style', 'display: flex');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {record.profilePic ? (
        <>
          <Avatar
            src={record.profilePic}
            sx={{ width: 40, height: 40 }}
            onError={handleImageError}
          />
          <Avatar
            sx={{ 
              width: 40, 
              height: 40, 
              display: 'none',
              bgcolor: 'primary.main' 
            }}
          >
            <PersonIcon />
          </Avatar>
        </>
      ) : (
        <Avatar
          sx={{ 
            width: 40, 
            height: 40,
            bgcolor: 'primary.main' 
          }}
        >
          <PersonIcon />
        </Avatar>
      )}
    </Box>
  );
};

const VipField: React.FC<{ record?: any }> = ({ record = {} }) => (
  <Chip
    label={record.isVip ? 'VIP' : 'Regular'}
    color={record.isVip ? 'primary' : 'default'}
    variant={record.isVip ? 'filled' : 'outlined'}
    size="small"
  />
);

const GenderField: React.FC<{ record?: any }> = ({ record = {} }) => (
  <span>{record.gender || 'Not specified'}</span>
);

const BioField: React.FC<{ record?: any }> = ({ record = {} }) => (
  <Box
    sx={{
      maxWidth: 200,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
    title={record.bio || ''}
  >
    {record.bio || 'No bio'}
  </Box>
);

export const UserList: React.FC<ListProps> = props => (
  <List
    {...props}
    sort={{ field: 'createdAt', order: 'DESC' }}
    perPage={25}
    exporter={false}
  >
    <Datagrid 
      rowClick="show" 
      optimized
      sx={{
        '& .RaDatagrid-table': {
          minWidth: 1200, // Ensure minimum width for all columns
        },
        '& .RaDatagrid-headerCell': {
          fontWeight: 'bold',
        },
        '& .RaDatagrid-rowCell': {
          maxWidth: 200, // Prevent cells from becoming too wide
        }
      }}
    >
      {/* ID Column */}
      <FunctionField
        label="ID"
        source="_id"
        render={record => truncateId(record._id)}
        sortable={false}
        sx={{ width: 80 }}
      />
      
      {/* Sortable text fields */}
      <TextField 
        source="username" 
        sortable={true}
        sx={{ minWidth: 120 }}
      />
      <TextField 
        source="email" 
        sortable={true}
        sx={{ minWidth: 180 }}
      />
      <TextField 
        source="handleName" 
        label="Handle"
        sortable={true}
        sx={{ minWidth: 120 }}
      />
      
      {/* Avatar - Not sortable */}
      <FunctionField
        label="Avatar"
        source="profilePic"
        render={(record) => <AvatarField record={record} />}
        sortable={false}
        sx={{ width: 80 }}
      />
      
      {/* Bio - Not sortable */}
      <FunctionField
        label="Bio"
        source="bio"
        render={(record) => <BioField record={record} />}
        sortable={false}
        sx={{ width: 200 }}
      />
      
      {/* Gender - Sortable */}
      <FunctionField
        label="Gender"
        source="gender"
        render={(record) => <GenderField record={record} />}
        sortable={true}
        sx={{ width: 100 }}
      />
      
      {/* VIP Status - Not sortable (boolean field) */}
      <FunctionField
        label="Status"
        source="isVip"
        render={(record) => <VipField record={record} />}
        sortable={false}
        sx={{ width: 100 }}
      />
      
      {/* Date fields - Sortable */}
      <DateField 
        source="createdAt" 
        label="Created"
        sortable={true}
        showTime
        sx={{ minWidth: 160 }}
      />
      <DateField 
        source="updatedAt" 
        label="Updated"
        sortable={true}
        showTime
        sx={{ minWidth: 160 }}
      />
    </Datagrid>
  </List>
);