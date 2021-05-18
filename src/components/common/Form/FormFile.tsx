import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFile, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';

interface FormFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  isInvalid?: boolean;
  labelIcon?: IconProp;
}

type FormFileComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLInputElement> & FormFileProps
>;

const FormFile: FormFileComponent = React.forwardRef(
  ({ className, id, isValid, isInvalid, labelIcon, onChange, ...props }, ref) => {
    const { controlId } = React.useContext(FormContext);

    const [filename, setFilename] = React.useState<string | null>(null);
    const [preview, setPreview] = React.useState<string | ArrayBuffer | null | undefined>(null);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;

      if (files instanceof FileList && files.length > 0) {
        const file: File = files[0];
        setFilename(file.name);

        if (file.type.includes('image')) {
          const reader = new FileReader();
          reader.onload = e => {
            setPreview(e.target?.result);
          };

          reader.readAsDataURL(file);
        } else {
          setPreview(null);
        }
      }
    };

    return (
      <label
        htmlFor={id || controlId}
        className={classNames(
          className,
          'text-center max-w-96 max-h-96',
          Boolean(preview) || Boolean(filename) ? 'p-3' : 'p-10',
          'inline-flex flex-col justify-center',
          'rounded-xl cursor-pointer bg-blue-300 transition-colors',
          'hover:shadow-lg focus:bg-blue-500 hover:bg-blue-500',
        )}
      >
        {preview ? (
          <img
            src={preview as string}
            alt={String(filename)}
            className="rounded-xl max-h-64 object-cover"
          />
        ) : null}
        {!preview && filename ? (
          <FontAwesomeIcon icon={faFile} size="2x" className="text-green-200 self-center" />
        ) : null}
        {filename ? (
          <p
            title={filename}
            className="truncate w-full mx-w-96 text-sm my-3 text-gray-600 font-bold"
          >
            {filename}
          </p>
        ) : null}

        <FontAwesomeIcon
          icon={labelIcon ?? faUpload}
          size="3x"
          className={classNames(
            'text-white self-center',
            Boolean(preview) || Boolean(filename) ? 'mt-auto' : '',
          )}
        />
        <input
          {...props}
          type="file"
          onChange={handleOnChange}
          ref={ref}
          id={id || controlId}
          className={classNames('hidden')}
        />
      </label>
    );
  },
);

export default FormFile;
