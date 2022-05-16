import './Loader.css';
import '../globalStyles.css';

export default function Loader(props) {
  return <img className={'loader' + props.size} src='./assets/spinner.svg' alt='SVGLoader' />;
}
