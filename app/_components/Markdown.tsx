import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it";

interface MProps {
  text: string;
}

const md = MarkdownIt();

const Markdown = ({ text }: MProps) => {
  const htmlContent = md.render(text);
  const sanitized = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitized }}></div>;
};

export default Markdown;
