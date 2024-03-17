import './HeadingBlock.css';

const HeadingBlock = ({children}) => {
  return (
    <div className="heading-block">
        {children}
    </div>
  );
}

export default HeadingBlock;