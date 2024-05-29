import { dataTextGeneral } from '@/data/text';
import { MaskHappy, TodoDone } from './icons';

const CounterProjects = () => {
	return (
		<div className="my-6 flex flex-col-reverse justify-center sm:flex-row-reverse xl:justify-end">
			<div className="flex w-full flex-row justify-between text-slate-800/70">
				<div className="satisfied-customers">
					<div className="flex items-center">
						<MaskHappy width="30" height="30" />
						<span className="mr-3 text-base font-bold">
							{dataTextGeneral.SatisfiedCustomers}
						</span>
					</div>
					<span className="text-lg font-bold">
						{dataTextGeneral.NumberSatisfiedCustomers}
					</span>
				</div>
				<div className="sm:items-center sm:justify-center">
					<div className="flex items-center">
						<MaskHappy width="30" height="30" />
						<span className="mr-3 text-base font-bold">
							{dataTextGeneral.inProgressProjects}
						</span>
					</div>
					<span className="text-lg font-bold">
						{dataTextGeneral.NumberOngoinProjects}
					</span>
				</div>
				<div className="sm:items-center sm:justify-center">
					<div className="flex items-center">
						<TodoDone width="30" height="30" />
						<span className="mr-3 text-base font-bold">
							{dataTextGeneral.CompletedProjects}
						</span>
					</div>
					<span className="text-lg font-bold">
						{dataTextGeneral.NumberCompletedProjects}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CounterProjects;
