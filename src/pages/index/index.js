import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.less';

@connect(({ count }) => ({
  ...count,
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };
  defaultProps={
    count:{}
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onAdd = () => {
    this.props.dispatch({ type: 'count/add' });
  };
  onDec = () => {
    this.props.dispatch({ type: 'count/dec' });
  };

  render() {
    const { num } = this.props;

    return (
      <View className="index">
        <Button className="add_btn" onClick={this.onAdd}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.onDec}>
          -
        </Button>
        <View>
          {num}
        </View>
        <View>Hello, World</View>
      </View>
    );
  }
}
