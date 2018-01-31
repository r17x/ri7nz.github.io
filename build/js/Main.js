from cards import Cards;

const IG_API = "https://www.instagram.com/ri7nz/?__a=1";

class Instagram extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        user:      [],
        isLoading: true,
      };
  }

  componentDidMount() {
    fetch(IG_API)
      .then(response => response.json())
      .then(data => this.setState({ user : data.user }));
    console.log( this.state.user );
  }
  
  render(){
    const { user, isLoading } = this.state;
    
    if ( isLoading ) {
      return <p> Loading... </p>;
    }
    
    return user.map( (u) => {
        return <Cards title={ u.full_name } content={ u.biography } footer={ u.external_ur } />;
    });
  }
}

ReactDOM.render(
    <div>
      <Instagram/>
    </div>,
    document.getElementById('app')
);

