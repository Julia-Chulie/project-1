function Menu() {
  return (
    <nav className="main-nav-menu">
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
        <li>
          <a href="/admin">admin</a>
        </li>
        <li>
          <a href="/admin/pageBuilder">Page builder</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
