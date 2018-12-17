import React from 'react';
import Hobby from '../../components/Other/Hobby';
import HobbyData from '../../data/ProfileData/hobbyData';
import BackgroundVideo from '../../components/Other/BackgroundVideo';

const SecitionHobby = props => {
  const renderHobby = HobbyData.map((data, index) => {
    return (
      <Hobby
        key={index}
        title={data.title}
        description={data.description}
        caption={data.caption}
        index={index}
      />
    );
  }
  );

  return (
    <section className="section section-interesting">
      <BackgroundVideo/>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Hobbies & interesting
        </h2>
      </div>
      {renderHobby}
    </section>
  );
};

export default SecitionHobby;