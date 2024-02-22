
interface props {
  currPage: string;
  needPage: string;
  children: React.ReactNode;
}

export default function Item({currPage, needPage, children}: props) {
  return (
    <>
      <div className="page">
        {needPage === currPage ? children : null}
      </div>
    </>
  )
}