import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  row: {
    marginTop: 5,
    flexDirection: 'row',
    marginBottom: 5,
  },
  link: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 2,
    borderRadius: 5,
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  hr: {
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  firstcompany: {
    marginLeft: 2,
  },
  work: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  company: {
    fontSize: 15,
    fontWeight: '400',
  },
  intern: {
    fontSize: 13,
    fontWeight: '300',
  },
  content: {
    fontSize: 11,
    marginLeft: 8,
  }
})

export default styles