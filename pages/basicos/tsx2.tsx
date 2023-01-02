export default function jsx2() {
  const list = [
    <li>orange</li>,
    <li>grape</li>,
    <li>lemon</li>,
  ];
  const content = (
    <div>
      <h1>TSX 2 {list}</h1>
    </div>
  );
  return content;
}