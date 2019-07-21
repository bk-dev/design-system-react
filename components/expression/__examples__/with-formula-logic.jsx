import React from 'react';
import Example from './example';

class FormulaLogic extends React.Component {
	static displayName = 'ExpressionWithFormulaLogicExample';

	render() {
		return <Example action={this.props.action} triggerType="formula" />;
	}
}

export default FormulaLogic;
