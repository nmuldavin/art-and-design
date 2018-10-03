import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';
import URLSearchParams from 'url-search-params';

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.should();

window.URLSearchParams = URLSearchParams;
window.expect = expect;

// eslint-disable-next-line
console.error = e => {
  throw new Error(e);
};

configure({ adapter: new Adapter() });
