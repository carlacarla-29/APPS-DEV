const Header = ({ onMenuToggle, onCartToggle, onSearchToggle }) => {
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 ml-2 md:ml-0">
              <h1 className="text-2xl font-bold text-gray-900">UA WORLDWIDE</h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Collections</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onSearchToggle}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={onCartToggle}
              className="p-2 text-gray-600 hover:text-gray-900 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};