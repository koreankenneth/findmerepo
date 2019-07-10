import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

class Comments extends React.Component {
  render() {
    return (
      <ScrollView style={styles.replies}>
        <Text>댓글</Text>
      </ScrollView>
    )
  }
}

function mapStateToProps({ findme }) {
  return {
    findme
  }
}

export default connect(mapStateToProps)(Comments)


const styles = StyleSheet.create({
  replies: {
  },
})