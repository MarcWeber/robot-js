////////////////////////////////////////////////////////////////////////////////
// -------------------------------------------------------------------------- //
//                                                                            //
//                       (C) 2010-2015 Robot Developers                       //
//                       See LICENSE for licensing info                       //
//                                                                            //
// -------------------------------------------------------------------------- //
////////////////////////////////////////////////////////////////////////////////

"use strict";

//----------------------------------------------------------------------------//
// Exports                                                                    //
//----------------------------------------------------------------------------//

module.exports = function (robot, native)
{
	//----------------------------------------------------------------------------//
	// Constructor                                                          Mouse //
	//----------------------------------------------------------------------------//

	////////////////////////////////////////////////////////////////////////////////

	function Mouse()
	{
	}



	//----------------------------------------------------------------------------//
	// Functions                                                            Mouse //
	//----------------------------------------------------------------------------//

	////////////////////////////////////////////////////////////////////////////////

	Mouse.prototype.click = function (button)
	{
	};

	////////////////////////////////////////////////////////////////////////////////

	Mouse.prototype.press = function (button)
	{
	};

	////////////////////////////////////////////////////////////////////////////////

	Mouse.prototype.release = function (button)
	{
	};

	////////////////////////////////////////////////////////////////////////////////

	Mouse.prototype.scrollH = function (amount)
	{
	};

	////////////////////////////////////////////////////////////////////////////////

	Mouse.prototype.scrollV = function (amount)
	{
	};



	//----------------------------------------------------------------------------//
	// Static                                                               Mouse //
	//----------------------------------------------------------------------------//

	////////////////////////////////////////////////////////////////////////////////

	Mouse.getPos = function()
	{
	};

	////////////////////////////////////////////////////////////////////////////////

	Mouse.setPos = function (ax, ay)
	{
	};

	////////////////////////////////////////////////////////////////////////////////

	Mouse.getState = function (button)
	{
	};

	////////////////////////////////////////////////////////////////////////////////

	return Mouse;
};
