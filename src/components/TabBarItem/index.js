import React,{ Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class TabBarItem extends Component {
  static defaultProps = {
    tintColor: '#ccc',
    focused: true
  }

  static propTypes = {
    style: View.propTypes.style,
    tintColor: PropTypes.string,
    focused: PropTypes.bool,
    selectedImage: Image.propTypes.source,
    normalImage: Image.propTypes.source
  }

  render() {
    return(
      <Image 
        source={ 
          this.props.focused ? 
          this.props.selectedImage : 
          this.props.normalImage 
        }
        style={[
            styles.tabbarImage
          ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  tabbarImage: {
    width: 22,
    height: 22
  }
})