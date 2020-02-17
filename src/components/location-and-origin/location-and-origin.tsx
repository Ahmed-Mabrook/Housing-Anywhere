import React from 'react';
import { ILocation } from '../../types/location';
import { getLocationAndOrigin } from '../../api/location';
import { SyncLoader } from 'react-spinners';

interface ILocationAndOriginComponentProps {
  locationURL: string;
  originURL: string;
}

export const LocationAndOriginComponent = (props: ILocationAndOriginComponentProps) => {
  const [location, setLocation] = React.useState<ILocation>();
  const [origin, setOrigin] = React.useState<ILocation>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const loadLocationAndOrigin = async () => {
      const data = await getLocationAndOrigin(props.locationURL, props.originURL);
      props.originURL && setOrigin(data.origin);
      props.locationURL && setLocation(data.location);
    };
    loadLocationAndOrigin();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [props.locationURL, props.originURL]);

  return !isLoading && (location || origin) ? (
    <div>
      {location !== undefined && (
        <div className='character-information'>
          <h5>Location</h5>
          <div>
            Name <span> {location.name}</span>
          </div>
          <div>
            Dimension<span>{location.dimension}</span>
          </div>
          <div>
            Type<span>{location.type}</span>
          </div>
          <div>
            Number of Residents<span>{location.residents && location.residents.length}</span>
          </div>
        </div>
      )}
      {origin !== undefined && (
        <div className='character-information'>
          <h5>Origin</h5>
          <div>
            Name <span> {origin.name}</span>
          </div>
          <div>
            Dimension<span>{origin.dimension}</span>
          </div>
          <div>
            Type<span>{origin.type}</span>
          </div>
          <div>
            Number of Residents<span>{origin.residents && origin.residents.length}</span>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className='spinner'>
      <SyncLoader size={6} color={'#ff9800'} />
    </div>
  );
};
