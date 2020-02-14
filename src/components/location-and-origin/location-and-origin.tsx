import React from 'react';
import style from './location-and-origin.module.scss';
import { ILocation } from '../../types/location';
import { getLocationAndOrigin } from '../../api/location';

interface ILocationAndOriginComponentProps {
  locationURL: string;
  originURL: string;
}

export const LocationAndOriginComponent = (props: ILocationAndOriginComponentProps) => {
  const [location, setLocation] = React.useState<ILocation>();
  const [origin, setOrigin] = React.useState<ILocation>();

  React.useEffect(() => {
    const loadLocationAndOrigin = async () => {
      const data = await getLocationAndOrigin(props.locationURL, props.originURL);
      setOrigin(data.origin);
      setLocation(data.location);
    };
    loadLocationAndOrigin();
  }, [props.locationURL, props.originURL]);

  return (
    <div className={style['character-location']}>
      {location && location.name}
      {origin && origin.name}
    </div>
  );
};
