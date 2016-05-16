import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Map} from 'immutable';
import DashboardImage from '../../../../src/components/body/dashboard/DashboardImage';
import {expect} from 'chai';

describe('DashboardImage', () => {

  it('displays an image from a url from an image prop', () => {
    const image = {
      url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
      title: 'Airplane Lolcat',
      description: 'This kitty thinks it is an airplane!'
    };
    const component = renderIntoDocument(
      <DashboardImage image={image}/>
    );
    const critiqueImage = scryRenderedDOMComponentsWithTag(component, "img");
    expect(critiqueImage[0].hasAttribute('src')).to.be.true;
    expect(critiqueImage[0].hasAttribute('alt')).to.be.true;
  });

  it('displays a title and description from an image prop', () => {
    const image = {
      url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
      title: 'Airplane Lolcat',
      description: 'This kitty thinks it is an airplane!'
    };
    const component = renderIntoDocument(
      <DashboardImage image={image}/>
    );
    const critiqueImageTitle = scryRenderedDOMComponentsWithClass(component, "critiqueImageTitle");
    const critiqueImageDescription = scryRenderedDOMComponentsWithClass(component, "critiqueImageDescription");
    expect(critiqueImageTitle[0].textContent).to.equal("Airplane Lolcat");
    expect(critiqueImageDescription[0].textContent).to.equal("This kitty thinks it is an airplane!");
  })

});