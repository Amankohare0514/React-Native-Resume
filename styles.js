import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
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
    borderTopColor: '#afa4a7',
    borderTopWidth: 1,
    marginTop:10,
  },
  firstcompany: {
    marginLeft: 2,
  },
  work: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 6,
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
  },
  projects: {
    marginLeft:2,
  },
  project: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 6,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: '400',
  },
  projectSkill: {
    fontSize: 13,
    fontWeight: '300',
  },
  educations:{
    marginLeft: 4,
  },
  education:{
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 6,
  },
  college:{
    fontSize: 13,
    fontWeight: '400',
  },
  field:{
    fontSize: 11,
    fontWeight: '400',
  },
  skills:{
    marginLeft: 4,
  },
  skill:{
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 6,
  },
  programmin:{
    fontSize: 11,
    fontWeight: '400',
  }
})

export default styles