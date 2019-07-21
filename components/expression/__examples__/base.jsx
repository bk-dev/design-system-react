import React from 'react';
import Example from './example';

class Base extends React.Component {
	static displayName = 'ExpressionResourceSelectedExample';

	render() {
		return (
			<Example
				action={this.props.action}
				conditions={[
					{
						resource: '111',
					},
				]}
				triggerType="all"
			/>
		);
	}
}

export default Base;
