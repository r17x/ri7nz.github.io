class Cards extends React.Component {

  constructor(props){

      super(props);
  }

  render() {
      return (
        <div className="cards">
            <div className="cardHead">
                <h3>{ this.props.title }</h3>
            </div>
            <div className="cardBody">
                { this.props.content }
            </div>
            <div className="cardFooter">
                { this.props.footer }
            </div>
        </div>
      );
  }
}

export default Cards;
