import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, Picker, ListView } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Header from './common/Header';
import { connect } from 'react-redux';
import { jobUpdate, jobCreate, il_ilcelerFetch } from '../Actions';
import Spinner from './common/Spinner';
import Confirm from './common/Confirm';

class JobForm extends Component {

    state = { showDosyaBilgileri: false, showTakeJob: false };

    onAccept() {

        const { il, ilce, saat, tarih, ucret, detay, adliye, merci, dosyaNo, karsiTarafAdi } = this.props;

        this.props.jobCreate({
            il: il || 'ADANA', 
            ilce: ilce, 
            saat, 
            tarih, 
            ucret, 
            detay, 
            adliye: adliye || 'Ankara Adliyesi',
            merci: merci || 'Sulh Ceza Mahkemesi', 
            dosyaNo, karsiTarafAdi
        });

        this.setState({ showTakeJob: false });
    }

    onDecline() {
        this.setState({ showTakeJob: false })
    }

    onButtonPress() {       // Expand or narrow dosya bilgileri
        this.setState({ showDosyaBilgileri: !this.state.showDosyaBilgileri })
    }

    onButtonPress1() {      // Show or hide taking job as a pop-up
        return (this.setState({ showTakeJob: !this.state.showTakeJob }));
    }

    onRenderDosyaBilgileri() {
        if (this.state.showDosyaBilgileri) {
            return (
                <View>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.labelStyle}>
                                Adliye
                            </Text>

                            <Picker style={styles.inputStyle}
                                selectedValue={this.props.adliye}
                                onValueChange={adliyeAdi => this.props.jobUpdate({ prop: 'adliye', 
                                                                                    value: adliyeAdi })}
                            >
                                <Picker.Item label='AKYURT ADLİYESİ' value='AKYURT ADLİYESİ' />
                                <Picker.Item label="İstanbul" value="İstanbul" />
                                <Picker.Item label="Bursa" value="Bursa" />
                                <Picker.Item label="İzmir" value="İzmir" />
                                <Picker.Item label="Çorum" value="Çorum" />                                
                            </Picker>
                        </View>
                    </CardSection>

                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.labelStyle}>
                                Merci
                            </Text>

                            <Picker style={styles.inputStyle}
                                selectedValue={this.props.merci}
                                onValueChange={merciAdi => this.props.jobUpdate({ prop: 'merci', 
                                                                                    value: merciAdi })}
                            >
                                <Picker.Item label="Sulh Ceza Mahkemesi" value="Sulh Ceza Mahkemesi" />
                                <Picker.Item label="İstanbul" value="İstanbul" />
                                <Picker.Item label="Bursa" value="Bursa" />
                                <Picker.Item label="İzmir" value="İzmir" />
                                <Picker.Item label="Çorum" value="Çorum" />
                            </Picker>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Input
                            label='Dosya Numarası'
                            placeholder='111'
                            onChangeText={text => this.props.jobUpdate({ prop: 'dosyaNo', value: text })}
                            value={this.props.dosyaNo}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label='Karşı Taraf Adı'
                            placeholder='Ahmet Faruk Bayrak'
                            onChangeText={karsiTarafAdi => this.props.jobUpdate({ prop: 'karsiTarafAdi', 
                                                                                value: karsiTarafAdi })}
                            value={this.props.karsiTarafAdi}
                        />
                    </CardSection>
                </View>
            );
        }
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
                    {this.props.ilItems}
                </Picker>
            );
        }
    }

    renderilcePicker() {

        if (this.props.ilce_fetch_finished) {
            return (
                <Picker style={styles.inputStyle}
                    selectedValue={this.props.ilce}
                    onValueChange={ilceAdi => this.props.jobUpdate({ prop: 'ilce', value: ilceAdi })}
                >
                    {this.props.il_ilceItems}
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

                <CardSection>
                    <Input
                        label='Saat'
                        placeholder='00:00'
                        onChangeText={text => this.props.jobUpdate({ prop: 'saat', value: text })}
                        value={this.props.saat}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Tarih'
                        placeholder='GG/AA/YYYY'
                        onChangeText={text => this.props.jobUpdate({ prop: 'tarih', value: text })}
                        value={this.props.tarih}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Ücret'
                        placeholder='... TL'
                        onChangeText={text => this.props.jobUpdate({ prop: 'ucret', value: text })}
                        value={this.props.ucret}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Detay'
                        placeholder='İşin detayını giriniz...'
                        onChangeText={text => this.props.jobUpdate({ prop: 'detay', value: text })}
                        value={this.props.detay}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Dosya Bilgileri
                    </Button>
                </CardSection>

                {this.onRenderDosyaBilgileri()}

                <CardSection>
                    <Button onPress={this.onButtonPress1.bind(this)}>
                        İşi yayınla
                    </Button>
                </CardSection>

                <Confirm
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    visible={this.state.showTakeJob}
                    detay={this.props.detay}
                >
                    İşi yayınlamak istediğinizden emin misiniz?
                </Confirm>

            </Card>
        );
    }
}

const styles = {
    pickerStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingBottom: 20,
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2,
    },
}


const mapStateToProps = (state) => {
    const { il, ilce, saat, tarih, ucret, detay, adliye, merci, dosyaNo, karsiTarafAdi } = state.jobFormRed;
    const { iller, il_ilceler, fetch_finished, ilce_fetch_finished } = state.jobRed;

    let ilItems = iller;
    let il_ilceItems = il_ilceler;

    return {
        il,
        ilce,
        saat,
        tarih,
        ucret,
        detay,
        adliye,
        merci,
        dosyaNo,
        karsiTarafAdi,
        ilItems,
        fetch_finished,
        ilce_fetch_finished,
        il_ilceItems
    };
}

export default connect(mapStateToProps, { jobUpdate, jobCreate, il_ilcelerFetch })(JobForm);