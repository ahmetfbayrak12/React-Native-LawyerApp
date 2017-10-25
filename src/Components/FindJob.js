import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, il_ilcelerFetch, jobUpdate } from '../Actions';
import { Text, View, Picker, ListView, StyleSheet, TouchableOpacity, } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Header from './common/Header';
import Confirm from './common/Confirm';


class FindJob extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      showPopUp: false,
      dataSource: ds.cloneWithRows([
        { app: 'DETAY', text1: 'ÜCRET', text2: 'TARİH/SAAT' },
        { app: 'DETAY', text1: 'ÜCRET', text2: 'TARİH/SAAT' },


      ]),
    };
  }

  onAccept() {

      this.setState({ showPopUp: false });
  }

  onDecline() {
      this.setState({ showPopUp: false })

  }

  onPressSingleRequest(rowData) {
    return(this.setState({ showPopUp: !this.state.showPopUp }));
  }

      renderilPicker() {
        if (this.props.fetch_finished) {
            return (
                <Picker style={styles.inputStyle}
                    selectedValue={this.props.il}
                    onValueChange={ilAdi => {
                                           this.props.jobUpdate({ prop: 'il', value: ilAdi }),   
                            this.props.il_ilcelerFetch({ value: ilAdi })
                    }}
                >
                    {this.props.ilItems1}
                </Picker>
            );
        }
    }

    renderilcePicker() {

        if (this.props.ilce_fetch_finished) {
            return (
                <Picker style={styles.inputStyle}
                    selectedValue={this.props.ilce}
                    onValueChange={() => console.log('hello world')}
                >
                    {this.props.il_ilceItems1}
                </Picker>
            );
        }
    }


  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>
              il
            </Text>
            {this.renderilPicker()}
          </View>
        </CardSection>

        <CardSection>
          <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>
              ilçe
            </Text>
            {this.renderilcePicker()}
          </View>
        </CardSection>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.container}
                onPress={this.onPressSingleRequest.bind(this, rowData)}>
                <View>
                  <Text  >{rowData.app}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                  <Text >{rowData.text1}</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text >{rowData.text2}</Text>
                </View>

              </TouchableOpacity>
            </View>
          }
        />
          <Confirm
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          visible={this.state.showPopUp}
          >
            İşi almak istediğinizden emin misiniz?
        </Confirm>
      </Card>
    );
  }
}

const styles = {


  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },

  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 20,
    flex: 2,
  },
  container: {
    paddingTop: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },


}
const mapStateToProps = (state) => {
  const { shift1, shift2 } = state.employeeForm;
  const { iller, il_ilceler, fetch_finished, ilce_fetch_finished } = state.jobRed;

  let ilItems1 = iller;
  let il_ilceItems1 = il_ilceler;

  return { 
      shift1, 
      shift2, 
      il_ilceItems1, 
      ilItems1,         
      fetch_finished,
      ilce_fetch_finished, 
    };
};

export default connect(mapStateToProps, { employeeUpdate, il_ilcelerFetch, jobUpdate })(FindJob);
