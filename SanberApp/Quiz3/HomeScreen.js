import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window')

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      totalPrice: 0,
    }
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  updatePrice(price) {
    //? #Soal Bonus (10 poin) 
    //? Buatlah teks 'Total Harga' yang akan bertambah setiap kali salah satu barang/item di klik/tekan.
    //? Di sini, buat fungsi untuk menambahkan nilai dari state.totalPrice dan ditampilkan pada 'Total Harga'.
    
    // Kode di sini
    var totalPrice = price + this.state.totalPrice
    this.setState({ totalPrice })
    console.log(price)
  }


  render() {
    // console.log(data.produk)
    return (
      <View style={styles.container}>
        <View style={{ minHeight: 50, width: DEVICE.width * 0.88 + 20, marginVertical: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Hai,{'\n'}
            {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              { this.props.route.params.name && <Text style={styles.headerText}>{ this.props.route.params.name }</Text>}
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>Total Harga{'\n'}
              <Text style={styles.headerText}>{this.currencyFormat(this.state.totalPrice)}</Text>
            </Text>
          </View>
          <View>

          </View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder='Cari barang..'
            onChangeText={(searchText => this.setState({ searchText }))}
          />
        </View>

        {/* 
        //? #Soal No 2 (15 poin)
        //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
        //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
        //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)

        // Lanjutkan di bawah ini!
        */}
        <View style={{flex:1}}>
          <FlatList
            data={data.produk}
            numColumns={2}
            renderItem={(data)=><ListItem data={data.item} />}
            keyExtractor={(item)=>item.id}
          />
        </View>

      </View>
    )
  }
};

class ListItem extends React.Component {

  callUpdatePrice = (harga) => {
    new HomeScreen().updatePrice(Number(harga));
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data
    return (
      <View style={styles.itemContainer}>
        <View>
          <Image source={{ uri: data.gambaruri }} style={styles.itemImage} resizeMode='contain' />
          <Text numberOfLines={2} ellipsizeMode='tail' style={styles.itemName} >{data.nama}</Text>
        </View>
        <View >
          <Text style={styles.itemPrice}>{this.currencyFormat(Number(data.harga))}</Text>
          <Text style={styles.itemStock}>Sisa stok: {data.stock}</Text>
        </View>
        <View style={styles.itemButton}>
          <Button title='BELI' color='blue' style={styles.itemButton} 
            onPress={this.callUpdatePrice(data.harga)}
            />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  //? Lanjutkan styling di sini
  itemContainer: {
    width: DEVICE.width * 0.44,
    backgroundColor: 'white',
    padding: 12,
    margin: 8,
    borderRadius: 12,
    height: 240,
    justifyContent: 'space-between'
  },
  itemImage: {
    width: "100%",
    height: 100
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  itemPrice: {
    textAlign: 'center',
    color: 'blue',
  },
  itemStock: {
    textAlign: 'center',
    fontSize: 12
  },
  itemButton: {
    alignItems: 'center'
  },
  buttonText: {
  }
})
