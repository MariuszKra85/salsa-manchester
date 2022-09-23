import { Player } from 'video-react';
import '/node_modules/video-react/dist/video-react.css';

export default function Steps({ name, url, poster }) {
  return (
    <div>
      <h3>{name}</h3>
      <Player playsInline src={url} poster={poster} />
    </div>
  );
}
