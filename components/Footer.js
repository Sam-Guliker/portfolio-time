import Link from 'next/link';

export default function Footer ({blok}) {

    return (
        <footer class="footer">
            <p className="footer-text">{blok.footer_label}</p>
            <p className="footer-text">{blok.footer_email}</p>
        </footer>
    )
  }