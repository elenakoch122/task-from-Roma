import './App.css';
import Element from './components/Element/Element';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  document.title = 'Modal';

  return (
    <div className="App">
      <dialog className="modal" open>
        <form className="form">
          <h1 className="form__title">Title form</h1>
          <button className="form__closeButton">&#10006;</button>

          <Wrapper isValid={false}>
            <input type="text" placeholder="First Name *" />
          </Wrapper>

          <Wrapper>
            <input type="text" placeholder="Last Name *" />
          </Wrapper>

          <Wrapper isValid={false}>
            <input type="email" placeholder="user@gmail.com *" />
          </Wrapper>

          <Element text="Product type *">
            <Wrapper isValid={false}>
              {/* установить react-select */}
              <select name="product" placeholder="Select product type">
                <option value="">Select product type</option>
                <option value="50">Product $50</option>
                <option value="100">Product $100</option>
                <option value="300">Product $300</option>
              </select>
            </Wrapper>
          </Element>

          <Element text="Additinal feature for $100">
            Switch
          </Element>

          <Element text="Additinal feature for $200">
            Switch
          </Element>

          <textarea placeholder="Type your comment" rows={4}></textarea>

          <Element text="Total price">
            $0
          </Element>

          <div className="form__sendButton__wrapper">
            <button className="form__sendButton">Send form</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default App;
