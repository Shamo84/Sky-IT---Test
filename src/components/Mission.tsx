import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_MISSION } from './Queries';

const GetMission = () => {
  const { error, loading, data } = useQuery(LOAD_MISSION);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data && (
        <div>
          {data.launches.map((mission: any, index: number) => {
            return <div key={index}>{mission.mission_name}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default GetMission;
