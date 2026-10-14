
import fs from 'node:fs';

import { consola } from 'consola';
// archiver v8 is ESM-only and dropped the default factory export
import { ZipArchive } from 'archiver';

export async function zipPack(sourceDir: string, outputZipPath: string): Promise<void> {
	return new Promise((res, rej) => {
		const output = fs.createWriteStream(outputZipPath);
		const archive = new ZipArchive({ zlib: { level: 9 } });

		output.on('close', () => {
			consola.success(`Packed ${archive.pointer()} total bytes to ${outputZipPath}`);
			res();
		});

		archive.on('error', (err) => rej(err));

		archive.on('progress', (data) => {
			consola.info(`Progress: ${data.entries.processed}`);
		});

		archive.pipe(output);
		archive.glob('**/*', {
			cwd: sourceDir,
			dot: false,
			ignore: ['*.zip', '**/.*', '.*'],
		});

		archive.finalize();
	});


}