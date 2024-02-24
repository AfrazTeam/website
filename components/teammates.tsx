import React from 'react';
import Image from 'next/image';
import { dataTextGeneral } from '@/data/text';
import { dataTeammates } from '@/data/users';

const Teammates = () => {
	return (
		<div>
			<p className="teammates-p">{dataTextGeneral.teammates}</p>
		</div>
	);
};

export default Teammates;
