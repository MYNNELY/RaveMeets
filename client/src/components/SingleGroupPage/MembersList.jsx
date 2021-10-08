import React from 'react';
import AddMembers from './AddMembers.jsx';
import {MemberContainer,
  MemberDetails,
  MemberPictures,
  MemberName} from './styles';

const MembersList = ({ memberDetails }) => {

  return (
    <MemberContainer style={{
      backgroundColor: '#1b2d46',
      borderRadius: '10px',
    }}>
      <div style={{
        // backgroundColor: 'red',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'grid',
        gridTemplateColumns: '150px 125px',
        justifyContent: 'space-between',
      }}>
        <span style={{
          marginTop: '7px',
        }}>
          Group Members
        </span>
        <AddMembers />
      </div>
      <hr style={{
        border: '0px solid',
        borderBottom: '1px solid',
      }}/>
      {memberDetails.map((member, index) => {
        if (index < 4) {
          return (
            <MemberDetails>
              <MemberPictures
                src={member.profile_pic_url || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
              />
              <MemberName>
                {member.name}
              </MemberName>
              <span>
                {member.role}
              </span>
            </MemberDetails>
          );
        }
      })}
    </MemberContainer>
  );
};

export default MembersList;
