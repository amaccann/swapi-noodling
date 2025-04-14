import { useLocation, useNavigate } from 'react-router';
import { useCache } from '../../api/CacheProvider';
import { white } from '../../colors';
import { PlanetIcon, RocketIcon } from '../../icons';
import WaveIcon from '../../icons/WaveIcon';
import Button from '../Button';
import Logo from '../Logo';
import NavItem from './NavItem';
import { Sidebar } from './styled';

export default function MainMenu() {
  const {clearAll} = useCache();
  const location = useLocation();
  const navigate = useNavigate();
  
  const onClickClear = () => {
    clearAll();

    const [root, id] = location.pathname.replace(/^\//, '').split('/');
    if (id) {
      navigate(`/${root}`);
    }
  };

  return (
    <Sidebar>
      <div style={{textAlign: 'center'}}>
        <Logo color={white} size={96} />
      </div>

      <nav>
        <NavItem icon={PlanetIcon} testId="planets" to="/planets">Planets</NavItem>
        <NavItem icon={WaveIcon} testId="people" to="/people">People</NavItem>
        <NavItem icon={RocketIcon} testId="starships" to="/starships">Starships</NavItem>
      </nav>

      <Button
        fontSize="0.75rem"
        onClick={onClickClear}
        variant="primary-inverse">
          Clear cache
      </Button>
    </Sidebar>
  );
}